import React, { useState } from 'react';
import { Panel, PanelHeader, Header, Group,  Div, FormItem, Input, Checkbox} from '@vkontakte/vkui';
import CarIng from '../img/car.gif'
import '../css/main.css'


const Home = () => {
	const [inputValueLong, setInputValueLong] = useState('6')
	const [inputValueHeight, setInputValueHeight] = useState('6')
	const [checked, setChecked] = useState(true)
	

	function calculator(){
		let pochta = 0
		if(parseInt(inputValueLong) < 6 ) return ('Неверное значение')
		if(parseInt(inputValueHeight) < 6) return ('Неверное значение')
		if(checked) pochta = 100
		const rezLong = parseInt(inputValueLong)*4
		const rezHeight = parseInt(inputValueHeight)*4
		return (rezLong + rezHeight + pochta)
	}
	return (
	<Panel style= {{height: '400px'}}>
		<PanelHeader style= {{textAlign: 'center'}}>Калькулятор</PanelHeader>

		<Group header={<Header mode="secondary">Расчет стоимоти наклеек</Header>} style={{width: '600px'}}>
			<Div className = 'information'>
				<FormItem top ='Длина наклейки (СМ)'>
					<Input type = 'number' style= {{ width: '200px'}} value = {inputValueLong} onChange = {e =>setInputValueLong(e.target.value)} />
				</FormItem>
				<FormItem top ='Ширина наклейки (СМ)' style= {{display: 'block'}} >
					<Input type = 'number'  style= {{ width: '200px' }} value= {inputValueHeight} onChange = {e => setInputValueHeight(e.target.value)}/>
				</FormItem>
				<FormItem top = 'Доставка'>
					<Checkbox checked = {checked} onChange = {()=> setChecked(!checked)}>Доставка почтой</Checkbox>
				</FormItem>
			</Div>
			<Div className = 'ilustrat'>
				{/* <img src = {CarIng} alt='Car' width = '300px' height = '100px'/> */}
				<div><h1>Сумма: {calculator()} руб.</h1></div>
			</Div>	
		</Group>
	</Panel>
)};

export default Home;
