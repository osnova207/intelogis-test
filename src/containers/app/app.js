import React from 'react';
import Map from '../../components/map';
import SplitView from '../../components/split-view';
import TasksList from '../../components/tasks-list';
import './app.scss';

const App = () => (
    <div className='App'>
        <SplitView
            leftComponent={<TasksList />}
            rightComponent={<Map />}
        />
    </div>
);

export default App;
