var listEstacionamiento = [];

for (let index = 0; index < 50; index++) {
    var estacionamiento = new Object();
    estacionamiento.Id = index + '' + Math.random()
    estacionamiento.Accion = [{
            Id: Math.random(),
            Estado: 0
        },
        {
            Id: Math.random(),
            Estado: 0
        },
        {
            Id: Math.random(),
            Estado: 0
        },
        {
            Id: Math.random(),
            Estado: 0
        },
    ];
    listEstacionamiento.push(estacionamiento);
}