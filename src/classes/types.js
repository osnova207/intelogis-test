export default class Types {
    static pointsCatalog = [
        { id: 0, label: 'точка 1', coords: { latitude: 45.026540, longitude: 39.039201 } },
        { id: 1, label: 'точка 2', coords: { latitude: 45.019487, longitude: 38.966698 } },
        { id: 2, label: 'точка 3', coords: { latitude: 45.047686, longitude: 38.942255 } },
        { id: 3, label: 'точка 4', coords: { latitude: 45.048546, longitude: 39.013824 } },
        { id: 4, label: 'точка 5', coords: { latitude: 45.079988, longitude: 39.031934 } },
        { id: 5, label: 'точка 6', coords: { latitude: 45.128681, longitude: 38.934538 } },
        { id: 6, label: 'точка 7', coords: { latitude: 44.984313, longitude: 38.999963 } },
        { id: 7, label: 'точка 8', coords: { latitude: 45.032846, longitude: 39.111201 } },
        { id: 8, label: 'точка 9', coords: { latitude: 45.059618, longitude: 39.179761 } },
        { id: 9, label: 'точка 10', coords: { latitude: 45.048380, longitude: 38.968468 } },
    ];

    static pointsCatalogMap = Types.pointsCatalog.reduce((acc, item) => acc.set(item.id, { ...item }), new Map());
    
    static tasks = [
        { id: 0, label: 'Заявка 1', loadingPoint: this.pointsCatalogMap.get(0), unloadingPoint: this.pointsCatalogMap.get(1), },
        { id: 1, label: 'Заявка 2', loadingPoint: this.pointsCatalogMap.get(2), unloadingPoint: this.pointsCatalogMap.get(3), },
        { id: 2, label: 'Заявка 3', loadingPoint: this.pointsCatalogMap.get(4), unloadingPoint: this.pointsCatalogMap.get(5), },
        { id: 3, label: 'Заявка 4', loadingPoint: this.pointsCatalogMap.get(6), unloadingPoint: this.pointsCatalogMap.get(7), },
        { id: 4, label: 'Заявка 5', loadingPoint: this.pointsCatalogMap.get(8), unloadingPoint: this.pointsCatalogMap.get(9), },
    ];

    static tasksMap = Types.tasks.reduce((acc, item) => acc.set(item.id, { ...item }), new Map());

    static tasksDestinations = [
        { id: 0, key: 'loadingPoint' },
        { id: 1, key: 'unloadingPoint' },
    ];

    static tasksDestinationsMap = Types.tasksDestinations.reduce((acc, item) => acc.set(item.key, { ...item }), new Map());
}
