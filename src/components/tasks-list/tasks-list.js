import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table, Select } from 'antd';
import * as appActions from '../../store/app/actions';
import Types from '../../classes/types';
import './tasks-list.scss';

const { pointsCatalog, tasksDestinationsMap } = Types;
const { Option } = Select;

const TasksList = () => {
    const tasks = useSelector((state) => state.app.tasks);
    const dispatch = useDispatch();

    const renderSelector = (point, task, destination) => (
        <Select
            style={{ width: 105 }}
            value={JSON.stringify(point)}
            onChange={(value) => dispatch(appActions.updateTaskPointAction({
                task,
                destination,
                nextPoint: JSON.parse(value),
            }))}
        >
            {pointsCatalog.map((point) => (
                <Option key={point.label} value={JSON.stringify(point)}>{point.label}</Option>
            ))}
        </Select>
    );

    const columns = [
        {
            title: 'Заявка',
            dataIndex: 'label',
            key: 'label',
        },
        {
            title: 'Погрузка',
            dataIndex: 'loadingPoint',
            key: 'loadingPoint',
            render: (point, task) => renderSelector(point, task, tasksDestinationsMap.get('loadingPoint').key),
        },
        {
            title: 'Разгрузка',
            dataIndex: 'unloadingPoint',
            key: 'unloadingPoint',
            render: (point, task) => renderSelector(point, task, tasksDestinationsMap.get('unloadingPoint').key),
        },
    ];

    const onRowSelect = (selectedRowKeys, selectedRows) => {
        const rowData = selectedRows[0];
        dispatch(appActions.setCurrentTaskAction(rowData));
    };

    return (
        <div className='TasksList'>
            <Table
                columns={columns}
                dataSource={tasks}
                pagination={false}
                rowKey={(row) => row.id}
                rowSelection={{ type: 'radio', onChange: onRowSelect }}
            />
        </div>
    );
};

export default TasksList;
