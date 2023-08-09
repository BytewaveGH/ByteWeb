"use client"
import Dashboard from '@/pages/admin/dashboard';
import { Tabs } from 'antd';
import React, { useRef, useState } from 'react'
import SignForm from '../signIn/page';

type TargetKey = React.MouseEvent | React.KeyboardEvent | string;

interface props {
    addItemsx: any[];
}

export default function AdminPage({ addItemsx }: props) {

    const add = () => {

        const newActiveKey = `newTab${newTabIndex.current++}`;
        setItems([...items, { id: 0, label: 'Edit Deadline', children: dashboard, key: newActiveKey },]);
        setActiveKey(newActiveKey);
        // console.log("HELL YEAHHHH", items)
    };

    const dashboard = (
        <Dashboard addTab={add} />
    )



    const tabPages: any[] = [
        { id: 0, label: 'Overview', children: dashboard, key: '1' },
    ]

    const [activeKey, setActiveKey] = useState<any>(tabPages[0].key);
    const [items, setItems] = useState(tabPages);
    const newTabIndex = useRef(0);

    const onChange = (key: string) => {
        setActiveKey(key);
    };



    const remove = (targetKey: TargetKey) => {
        const targetIndex = items.findIndex((pane) => pane.key === targetKey);
        const newPanes = items.filter((pane) => pane.key !== targetKey);
        if (newPanes.length && targetKey === activeKey) {
            const { key } = newPanes[targetIndex === newPanes.length ? targetIndex - 1 : targetIndex];
            setActiveKey(key);
        }
        setItems(newPanes);
    };

    const onEdit = (targetKey: TargetKey, action: 'add' | 'remove') => {
        if (action === 'add') {
            add();
        } else {
            remove(targetKey);
        }
    };


    return (
        <div>
            <Tabs
                hideAdd
                onChange={onChange}
                activeKey={activeKey}
                type="editable-card"
                onEdit={onEdit}
                items={items}
            />
        </div>
    )
}
