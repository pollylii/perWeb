import React, { Component } from 'react'
import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import './index.scss'

export default class WheelWorks extends Component {
    render() {
        const { Meta } = Card;
        return (
            <div className="wheelWorks">
                <div>
                    {
                        [1, 2, 3].map(item => {
                            return (
                                <Card
                                    key={item}
                                    style={{ width: 800 }}
                                    cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                                    actions={[<SettingOutlined key="setting" />, <EditOutlined key="edit" />, <EllipsisOutlined key="ellipsis" />,]}
                                >
                                    <Meta
                                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                        title="Card title"
                                        description="This is the description"
                                    />
                                </Card>
                            )
                        })
                    }
                </div>
                

            </div>
        )
    }
}
