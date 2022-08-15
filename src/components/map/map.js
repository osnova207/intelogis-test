import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { MapContainer, TileLayer } from 'react-leaflet';
import RoutingMachine from '../routing-machine';
import 'leaflet/dist/leaflet.css';
import './map.scss';

const centerCoords = [45.043101, 38.977685];

const Map = ({ width }) => {
    const currentTask = useSelector((state) => state.app.currentTask);
    const mapRef = useRef();

    const resizeMap = (mapRef) => {
        const resizeObserver = new ResizeObserver(() => mapRef?.current?.invalidateSize());
        const mapWrapper = document.getElementById('map-wrapper');
        if (mapWrapper) resizeObserver.observe(mapWrapper);
    };

    return (
        <div className='Map' id='map-wrapper' style={{ height: 500 }} >
            <MapContainer
                ref={mapRef}
                center={centerCoords}
                zoom={11}
                scrollWheelZoom={false}
                style={{ height: '100%', width: width }}
                whenReady={() => resizeMap(mapRef)}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {(currentTask && mapRef.current) && <RoutingMachine map={mapRef} task={currentTask} />}
            </MapContainer>
        </div>
    );
};

export default Map;
