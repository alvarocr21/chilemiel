const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			carrito: [],
			productos: [
				{
					nombre: "Frasco de miel",
					precio: 3000,
					urlImagen:
						"https://images.unsplash.com/photo-1587049352851-8d4e89133924?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aG9uZXl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
					detalle: "Frasco deliciosa miel directa de nuestros productores"
				},
				{
					nombre: "Cuchara de miel",
					precio: 1500,
					urlImagen:
						"https://images.unsplash.com/photo-1555035900-54c17f3bc1eb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8aG9uZXl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
					detalle: "Justo la cuchara que necesita para extraer la miel."
				},
				{
					nombre: "Colmena",
					precio: 300000,
					urlImagen:
						"https://images.unsplash.com/photo-1586779161164-d89795b07b71?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=564&q=80",
					detalle: "Nuestras colmenas cuentan con altos estandares de seguridad"
				},
				{
					nombre: "Tasa para avena",
					precio: 1500,
					urlImagen:
						"https://images.unsplash.com/photo-1575666236466-92a020a3d22b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvbmV5fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
					detalle: "Perfecta para su avena con miel"
				},
				{
					nombre: "Vajilla completa",
					precio: 10500,
					urlImagen:
						"https://images.unsplash.com/photo-1518883027849-d57bd1849feb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nzl8fGhvbmV5fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
					detalle: "Vajilla completo para sus frutas y lo mas importante la miel"
				},
				{
					nombre: "Janolia",
					precio: 15000,
					urlImagen:
						"https://images.unsplash.com/photo-1580047546906-92e68dced5c9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8ODh8fGhvbmV5fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
					detalle: "Panal cera de abeja, para apicultura"
				},
				{
					nombre: "Colmena Ornamental",
					precio: 8500,
					urlImagen:
						"https://images.unsplash.com/photo-1604344796994-11bf2bc5f0c0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OTR8fGhvbmV5fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
					detalle: "Una pieza de arte perfecta para su sala"
				},
				{
					nombre: "Cera dermatologica",
					precio: 6000,
					urlImagen:
						"https://images.unsplash.com/photo-1565206594704-0ee96fe6b62a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTEwfHxob25leXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
					detalle: "Cera humectante para el cuidado de la piel"
				},
				{
					nombre: "Permufe Chimiel N°5",
					precio: 45000,
					urlImagen:
						"https://images.unsplash.com/photo-1614179402165-b0ffc37c5494?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTE1fHxob25leXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
					detalle: "Perfume a base de miel una fragrancia deliciosa"
				}
			],
			vendedores: [
				{
					nombre: "Francisco Morales A.",
					ingreso: "02/06/2015",
					urlImagen:
						"https://images.unsplash.com/photo-1617094876531-3ad72ca3306d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",
					detalle: "Vendedor experto, cuenta con un promedio de $15K al mes"
				},
				{
					nombre: "María Segura M.",
					ingreso: "04/08/2018",
					urlImagen:
						"https://images.unsplash.com/photo-1616896232762-2a8d62a8ee2d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
					detalle: "Vendedora junior, cuenta con un promedio de $7K al mes"
				},
				{
					nombre: "Angela Andrade G.",
					ingreso: "08/20/2010",
					urlImagen:
						"https://images.unsplash.com/photo-1589995597792-dff1818953bf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=562&q=80",
					detalle: "Vendedor senior, cuenta con un promedio de $20K al mes"
				}
			],
			vendedor: {
				nombre: "",
				ingreso: "",
				urlImagen: "",
				detalle: ""
			},
			logeado: false,
			usuarios: [
				{
					nombre: "Alvaro Solano",
					email: "asolano@gmail.com",
					clave: "12345"
				},
				{
					nombre: "Invitado",
					email: "invitado@gmail.com",
					clave: "54321"
				}
			],
			nombreActivo: "",
			rutaIni: "/"
		},
		actions: {
			setLog: estado => {
				setStore({ logeado: estado });
			},
			setNombreActivo: nombre => {
				setStore({ nombreActivo: nombre });
			},
			setCarrito: compra => {
				const store = getStore();
				setStore({ carrito: [...store.carrito, compra] });
			},
			setCompras: compra => {
				const store = getStore();
				let contar = 0;
				store.carrito.map((item, indice) => {
					if (compra == item) {
						let newList = store.carrito;
						newList.splice(indice, 1);
						contar++;
						setStore({ carrito: newList });
					}
				});

				if (store.carrito.length == 0 && contar == 0) {
					setStore({ carrito: [...store.carrito, compra] });
				} else if (store.carrito.length > 0 && contar == 0) {
					setStore({ carrito: [...store.carrito, compra] });
				}
			},
			setVendedor: mostrar => {
				setStore({ vendedor: mostrar });
			}
		}
	};
};

export default getState;
