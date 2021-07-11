import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { View, AdaptivityProvider, AppRoot } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';

const App = () => {
	const [fetchedUser, setUser] = useState(null);

	useEffect(() => {
		bridge.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}
		});
		async function fetchData() {
			const user = await bridge.send('VKWebAppGetUserInfo');
			setUser(user);
		}
		fetchData();
	}, []);
	

	// async function Market(){

	// 	const {access_token} = await bridge.send("VKWebAppGetAuthToken", {"app_id": 7894696, "scope": "market"});

	// 	const market = await bridge.send("VKWebAppCallAPIMethod", {
	// 		"method": "market.get",
	// 		"params": {
	// 			'owner_id': -178902955,
	// 			"v":"5.131", 
	// 			"access_token": `${access_token}`
	// 	}})
	// 	return market.response.items
	// }

	return (
		<AdaptivityProvider>
			<AppRoot>
				<View  >
					<Home/>
				</View>
			</AppRoot>
		</AdaptivityProvider>
	);
}

export default App;
