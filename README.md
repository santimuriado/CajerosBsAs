# Cajeros

Cajeros es un proyecto que utiliza en su Frontend HTML, CSS(Bootsrap) y Javascript. El Back-end esta programado utilizando Javascript con frameworks NodeJs y ExpressJs.
La idea es que el usuario pueda ingresar sus coordenadas y se muestre en el mapa debajo los 3 cajeros automaticos mas cercanos al usuario y que a su vez se encuentren a 
menos de 500 metros de las coordenadas ingresadas. Como buscar las coordenadas de uno mismo puede ser un trabajo engorroso, tambien esta disponible la opcion para que con
el permiso del usuario, la pagina web detecte automaticamente la posicion del usuario y devuelva los cajeros correspondientes. Ademas se puede elegir la red de cajeros
que se quiere buscar, sea LINK o BANELCO. ACLARACION: solo funciona para los cajeros de la Ciudad de Buenos Aires ya que trabaja con un dataset de la misma. Podria
funcionar si se cambia el link de descarga al dataset que se quiera utilizar y si el archivo csv comparte nombres de atributos.

# Requerimientos:

NodeJs:v17.6.0.   
NPM:8.3.1  
No se requiere necesariamente esas versiones pero fue programada con ellas.

# Como correr el software:

+ Clonar el repo:
        
        git clone https://github.com/santimuriado/CajerosBsAs.git
        
+ Una vez dentro de la carpeta:
        
        npm install
 Para instalar las dependencias necesarias generando la carpeta node-modules.
 
 + Bajar el dataset:
 
        node downloadFile
 
 + Correr el server:
 
        node app
        
 + (Opcional) Se puede correr tambien usando npm start gracias a la dependencia nodemon la cual reinicia el server con cada cambio guardado.
        
        npm start

# Endpoints:
 
La aplicacion solo cuenta con 2 endpoints importantes.   

+ (/) o http://localhost:5000/ el cual solo contiene un link que redirecciona al endpoint mas importante.
+ http://localhost:5000/cajeros que contiene la aplicacion principal.
