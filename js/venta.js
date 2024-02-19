let tempVenta = ''
const pagina = document.getElementById('venta')
const propiedades_ventas = [
    {
    nombre: 'Apartamento de lujo en zona exclusiva',
    src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
    descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
    ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
    habitaciones: 4,
    baños: 4,
    costo: 5000,
    smoke: false,
    pets: false
    },

    {
    nombre: 'Apartamento acogedor en la montaña',
    src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
    descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
    ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
    habitaciones: 2,
    baños: 1,
    costo: 1200,
    smoke: true,
    pets: true
    },

    {
    nombre: 'Penthouse de lujo con terraza panorámica',
    src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
    descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
    ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
    habitaciones: 3,
    baños: 3,
    costo: 4500,
    smoke: false,
    pets: true
    }
    ]

    for (const proVenta of propiedades_ventas){
        let fumar = ''
        
        if (proVenta.smoke == true){
            fumar = '<p class="text-success"> <i class="fas fa-smoking"></i> Permitido fumar </p>'
        } else {
            fumar = '<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>'
        } 

        let mascota =''
        if (proVenta.pets == true){
            mascota = '<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>'
        } else {
            mascota = '<p class="text-danger"><i class="fa-solid fa-ban"></i> No se permiten mascotas</p>'
        }

    
tempVenta += `

<div class="col-md-4 mb-4">
<div class="card"> 
  <img
    src=${proVenta.src}
    class="card-img-top"
    alt="Imagen del departamento"
  />
  <div class="card-body">
    <h5 class="card-title">
      ${proVenta.nombre}
    </h5>
    <p class="card-text">
      ${proVenta.descripcion}
      residencial
    </p>
    <p>
      <i class="fas fa-map-marker-alt"></i> ${proVenta.ubicacion}
    </p>
    <p>
      <i class="fas fa-bed"></i> ${proVenta.habitaciones} habitaciones |
      <i class="fas fa-bath"></i> ${proVenta.baños} baños
    </p>
    <p><i class="fas fa-dollar-sign"></i> ${proVenta.costo}</p>
    
    ${fumar}
    ${mascota}

  </div>
</div>

</div>

`
}

pagina.innerHTML = tempVenta
