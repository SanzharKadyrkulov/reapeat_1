import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import EmployersList from "./components/EmployersList";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "react-bootstrap";
import axios from "axios";

const data = [
	{ name: "SALAMAT", surname: "BAIKE", days: 20, salaryPerDay: 80 },
	{ name: "Dastan", surname: "aaa", days: 15, salaryPerDay: 40 },
	{ name: "Emir", surname: "bbb", days: 22, salaryPerDay: 60 },
	{ name: "Sheraman", surname: "ccc", days: 15, salaryPerDay: 55 },
	{ name: "Albina", surname: "kkk", days: 18, salaryPerDay: 44 },
	{ name: "Azret", surname: "hhh", days: 10, salaryPerDay: 22 },
	{ name: "Mirdin", surname: "Agai", days: 20, salaryPerDay: 70 },
	{ name: "Bayish", surname: "zzz", days: 16, salaryPerDay: 33 },
	{ name: "Adilet", surname: "Gazybekov", days: 11, salaryPerDay: 16 },
];
const API = "http://localhost:8000/employers";

function App() {
	const [employers, setEmployers] = useState([]);
	async function getEmployers() {
		const { data } = await axios(API);
		setEmployers(data);
	}

	useEffect(() => {
		getEmployers();
	}, []);

	function changeDay(name, days) {
		const newArr = employers.map((item) => {
			if (item.name === name) {
				item.days = days;
			}
			return item;
		});
		setEmployers(newArr);
	}

	function changeSalary(name, salary) {
		const newArr = employers.map((item) => {
			if (item.name === name) {
				item.salaryPerDay = salary;
			}
			return item;
		});
		setEmployers(newArr);
	}

	function handleChange(name, key, data) {
		const newArr = employers.map((item) => {
			if (item.name === name) {
				item[key] = data;
			}
			return item;
		});

		setEmployers(newArr);
	}

	function calcTotal() {
		return employers.reduce(
			(acc, item) => acc + item.days * item.salaryPerDay,
			0
		);
	}

	return (
		<div>
			<EmployersList
				employers={employers}
				changeDay={changeDay}
				changeSalary={changeSalary}
				handleChange={handleChange}
				calcTotal={calcTotal}
			/>
		</div>
	);
}

export default App;
