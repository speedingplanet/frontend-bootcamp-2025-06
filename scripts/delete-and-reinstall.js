// @ts-check
import { rimraf } from 'rimraf';


let locations = [
	'.',
	'front-end-demos',
	'front-end-labs',
	'front-end-labs/front-end-apps',
	'react-demos',
	'react-labs',
	'react-labs/react-app',
	'servers/rest-server',
	'servers/graphql'
];

let node_modules = locations.map((l) => `${l}/node_modules`);

console.log('Deleting files...');
await rimraf(node_modules);
console.log('Complete');
