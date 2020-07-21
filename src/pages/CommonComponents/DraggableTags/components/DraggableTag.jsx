/**
 * Tag拖动排序组件
 * @author SPY
 * @description -- 进行标记和分类的小标签展示及排序
 * @date -- 2019/11/15
 */

import { sortableContainer, sortableElement } from 'react-sortable-hoc';
import React from 'react';
import { Tag } from 'antd';
import styles from './DraggableTag.less';

class NormalTag extends React.Component {

    render() {
        const { value, style, draggable, onClick } = this.props;
        
        return (
            <Tag
                style={style}
                className={[styles.tag, draggable ? styles.draggableTag : null].join(' ')}
                onClick={onClick}
            >
                {value}
            </Tag>
        );
    }
}

const SortableTag = sortableElement(NormalTag);

class DraggableTag extends React.Component {

    render() {
        const {
            items,
            idKey = 'id',
            nameKey = 'name',
            draggable = true,
            style,
            className,
            tagStyle,
            tagClassName,
            onClickTag = () => { },

        } = this.props;
        
        return (
            <div style={style} className={[styles.group, className].join(' ')}>
                {
                    !Array.isArray(items) || items.length === 0 ? <span>暂无数据</span> : null
                }
                {
                    Array.isArray(items) && items.map((item, index) => {
                        return draggable ?
                            <SortableTag
                                key={item[idKey]}
                                index={index}
                                value={item[nameKey]}
                                style={tagStyle}
                                className={tagClassName}
                                draggable={draggable}
                            /> :
                            <NormalTag
                                key={item[idKey]}
                                index={index}
                                value={item[nameKey]}
                                style={tagStyle}
                                className={tagClassName}
                                draggable={draggable}
                                onClick={onClickTag}
                            />
                    })
                }

            </div>
        );
    }
}

export default sortableContainer(DraggableTag);
