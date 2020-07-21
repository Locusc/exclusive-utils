/**
 * Tag组件用法展示及api介绍
 * @author SPY
 * @description -- 进行标记和分类的小标签展示及排序
 * @date -- 2019/11/15
 */

import React from 'react';
import { connect } from 'umi';
import { message, Card, Row, Col, Button, List, } from 'antd';
import DraggableTag from './components/DraggableTag';
import ReactMarkdown from 'react-markdown';
import CodeBlock from '@/pages/GlobalComponents/CodeBlock';
import indexMd from './index.md';

class DraggableTags extends React.Component {

    state = {
        draggable: false,  // 默认不排序
    }

    // 排序状态
    handleSortStatus = () => {
        const { draggable } = this.state;
        this.setState({
            draggable: !draggable,
        }, () => {
            const { draggable } = this.state;
            const { items } = this.props;
            if (!draggable) {
                // 保存
                message.success(items.map(item => `${item.name} `), 3);
            }
        });

    }

    // 排序函数
    handleSortTags = ({ newIndex, oldIndex }) => {
        const { dispatch } = this.props;
        dispatch({
            type: 'draggable/fetchSortTags',
            payload: {
                newIndex,
                oldIndex,
            },
        });
    }

    // 还原
    handleResetTags = () => {
        const { dispatch } = this.props;
        dispatch({
            type: 'draggable/fetchResetTags',
        });
    }

    // 渲染extra
    renderExtra = () => {
        const { draggable } = this.state;
        return draggable ? (
            <span>
                <Button size='small' style={{ marginRight: 4 }} onClick={this.handleResetTags}>还原</Button>
                <Button size='small' type='primary' onClick={this.handleSortStatus}>保存</Button>
            </span>
        ) : (
                <span>
                    <Button size='small' type='primary' onClick={this.handleSortStatus}>排序</Button>
                </span>
            );
    }

    render() {
        const { draggable } = this.state;
        const { items } = this.props;
        return (
            <Card
              bordered={false}
            >
                <Row type='flex' justify='space-around' gutter={8}>
                    <Col span={12}>
                    <ReactMarkdown
                      source={indexMd}
                      escapeHtml={false}
                      renderers={{
                        code: CodeBlock
                      }}
                    />
                    </Col>
                    <Col span={12}>
                        <Card
                            title='水果搭配'
                            type='inner'
                            size='small'
                            style={{ overflowY: 'auto', borderTop: '1px solid #e8e8e8' }}
                            extra={this.renderExtra()}
                        >
                            <DraggableTag
                                items={items}
                                draggable={draggable}
                                axis='xy'
                                onSortEnd={this.handleSortTags}
                            />
                        </Card>
                    </Col>
                </Row>
            </Card>
        );
    }
}

export default connect(({ draggable }) => ({
  items: draggable.items,
  backupItems: draggable.backupItems,
}))(DraggableTags);