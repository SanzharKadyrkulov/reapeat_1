import React from "react";
import { Spinner, Table } from "react-bootstrap";

const EmployersList = ({
	employers,
	changeDay,
	changeSalary,
	handleChange,
	calcTotal,
}) => {
	return (
		<div>
			<Table striped>
				<thead>
					<tr>
						<th>#</th>
						<th>First Name</th>
						<th>Last Name</th>
						<th>days</th>
						<th>salaryPerDay</th>
						<th>salary</th>
					</tr>
				</thead>
				<tbody>
					{employers.length > 0 ? (
						employers.map((item, i) => (
							<tr key={item.name}>
								<td>{i + 1}</td>
								<td>{item.name}</td>
								<td>{item.surname}</td>
								<td>
									<input
										onChange={(e) =>
											handleChange(item.name, "days", +e.target.value)
										}
										value={item.days}
										type="number"
									/>
								</td>
								<td>
									<input
										onChange={(e) =>
											handleChange(item.name, "salaryPerDay", +e.target.value)
										}
										value={item.salaryPerDay}
										type="number"
									/>
								</td>
								<td>{item.days * item.salaryPerDay}</td>
							</tr>
						))
					) : (
						<tr>
							<td>
								<Spinner animation="border" />
							</td>
						</tr>
					)}
				</tbody>
			</Table>
			<h2 style={{ textAlign: "right", padding: "0 20px" }}>{calcTotal()}</h2>
		</div>
	);
};

export default EmployersList;
