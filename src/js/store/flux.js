const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			carrito: [],
			productos: [],
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
			}
		}
	};
};

export default getState;
