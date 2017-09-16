import React, { Component } from 'react';
import {Button, Table } from 'antd/lib'

export default class PaishouGuanli extends Component {
  render() {
    const {paishous, loading, onAdd} = this.props
    const columns = [{
      title: "姓名",
      dataIndex: 'profile.name'
    }, {
      title: "手机号",
      dataIndex: 'profile.phoneNo'
    }]
    return (
      <div className="PaishouGuanli">
        <Button onClick={onAdd} type="primary">新增</Button>
        <Table columns={columns} dataSource={paishous} />
      </div>
    );
  }
}

PaishouGuanli.propTypes = {
  paishous: React.PropTypes.array,
  loading: React.PropTypes.bool
};
