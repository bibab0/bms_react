import React from 'react';
import { Table, Tag, Space } from 'antd';
const { Column } = Table;
const rowSelection = [];
const data = [];
for (let i = 0; i < 46; i++) {
    data.push({
        key: i,
        firstName: `Edward King ${i}`,
        age: 32,
        address: `London, Park Lane no. ${i}`,
        tags: ['nice', 'developer'],
    });
}
function Role() {
    return (
        <Table dataSource={data} rowSelection={rowSelection}>
            <Column title="姓名" dataIndex="firstName" key="firstName" />
            <Column title="年龄" dataIndex="age" key="age" />
            <Column title="地址" dataIndex="address" key="address" />
            <Column title="标签" dataIndex="tags" key="tags" render={tags => (
                <>
                    {tags.map(tag => (
                        <Tag color="blue" key={tag}>{tag}</Tag>
                    ))}
                </>
            )} />
            <Column title="操作" key="action" render={(text, record) => (
                <Space size="middle">
                    <span>Invite {record.lastName}</span>
                    <span>Delete</span>
                </Space>
            )} />
        </Table>
    )
}
export default Role;