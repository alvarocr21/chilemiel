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
			]
		},
		actions: {
			setLog: estado => {
				const store = getStore();
				setStore({ logeado: estado });
			}
		}
	};
};

export default getState;
