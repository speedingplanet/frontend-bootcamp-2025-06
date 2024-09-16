import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Country } from '../demo-types';

/*
query NAME_OF_QUERY {
	queryYouWantToRun {
		props
		to
		display
		from
		the
		return
		value(s)
	}
}

*/

// 1) Write a GraphQL query
const GET_COUNTRIES = gql`
	query GetCountries {
		countries {
			id
			country
			pop2022
		}
	}
`;

function BasicQuery() {
	// const { loading, error, data } = useQuery(GET_COUNTRIES);
	// Send the query with useQuery
	const response = useQuery<{ countries: Country[] }>(GET_COUNTRIES);

	// Handle unsuccessful responses
	// Still loading / slow connection
	if (response.loading) return <p>Loading...</p>;

	// Some kind of error
	if (response.error) return <p>Error : {response.error.message}</p>;

	// Empty data set
	if (!response.data) return <span>No requests made.</span>;

	return (
		<div className="row">
			<div className="col">
				<h3>Apollo GraphQL queries</h3>
				<table className="table table-striped">
					<thead>
						<tr>
							<th>Country</th>
							<th>Population</th>
							<th>Area</th>
						</tr>
					</thead>
					<tbody>
						{/* Iterate over the data and print it out */}
						{response.data.countries.map((country) => (
							<tr key={country.id}>
								<td>{country.country}</td>
								<td>{country.pop2022}</td>
								<td>{country.area}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default BasicQuery;
