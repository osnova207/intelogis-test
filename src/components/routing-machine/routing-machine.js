import React, { useCallback, useMemo } from 'react';
import Leaflet from 'leaflet';
import { createControlComponent } from '@react-leaflet/core';
import 'leaflet-routing-machine';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';

const RoutingMachine = ({ map, task }) => {
    const createRoutineMachineLayer = useCallback(() => {
        const { loadingPoint, unloadingPoint } = task;
        const routing = Leaflet.Routing.control({
            waypoints: [
                Leaflet.latLng(loadingPoint.coords.latitude, loadingPoint.coords.longitude),
                Leaflet.latLng(unloadingPoint.coords.latitude, unloadingPoint.coords.longitude),
            ],
            show: false,
        });

        return routing.addTo(map.current);
    }, [task, map]);

    const ControlComponent = useMemo(
        () => createControlComponent(createRoutineMachineLayer),
        [createRoutineMachineLayer]
    );

    return (
        <ControlComponent />
    );
}

export default React.memo(RoutingMachine);