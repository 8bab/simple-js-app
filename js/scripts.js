let pokemonList = [
    {dexNum: '#001', name: 'Bulbasaur', height: '0.7 m', types:'Grass, Poison' },
    {dexNum: '#002', name: 'Ivysaur', height: '1.0 m', types:'Grass, Poison' },
    {dexNum: '#003', name: 'Venusaur', height: '2.0 m', types:'Grass, Poison' },
    {dexNum: '#004', name: 'Charmander', height: '0.6 m', types:'Fire' },
    {dexNum: '#005', name: 'Charmeleon', height: '1.1 m', types:'Fire' },
    {dexNum: '#006', name: 'Charizard', height: '1.7 m', types:'Fire, Flying' },
    {dexNum: '#007', name: 'Squirtle', height: '0.5 m', types:'Water' },
    {dexNum: '#008', name: 'Wartortle', height: '1.0 m', types:'Water' },
    {dexNum: '#009', name: 'Blastoise', height: '1.6 m', types:'Water' },
    {dexNum: '#010', name: '', height: '', types:'' },
    {dexNum: '#011', name: '', height: '', types:'' },
    {dexNum: '#012', name: '', height: '', types:'' },
    {dexNum: '#013', name: '', height: '', types:'' },
    {dexNum: '#014', name: '', height: '', types:'' },
    {dexNum: '#015', name: '', height: '', types:'' },
    {dexNum: '#016', name: '', height: '', types:'' },
    {dexNum: '#017', name: '', height: '', types:'' },
    {dexNum: '#018', name: '', height: '', types:'' },
    {dexNum: '#019', name: '', height: '', types:'' },
    {dexNum: '#020', name: '', height: '', types:'' },
    {dexNum: '#021', name: '', height: '', types:'' },
    {dexNum: '#022', name: '', height: '', types:'' },
    {dexNum: '#023', name: '', height: '', types:'' },
    {dexNum: '#024', name: '', height: '', types:'' },
    {dexNum: '#025', name: '', height: '', types:'' },
    {dexNum: '#026', name: '', height: '', types:'' },
    {dexNum: '#027', name: '', height: '', types:'' },
    {dexNum: '#028', name: '', height: '', types:'' },
    {dexNum: '#029', name: '', height: '', types:'' },
    {dexNum: '#030', name: '', height: '', types:'' },
    {dexNum: '#031', name: '', height: '', types:'' },
    {dexNum: '#032', name: '', height: '', types:'' },
    {dexNum: '#033', name: '', height: '', types:'' },
    {dexNum: '#034', name: '', height: '', types:'' },
    {dexNum: '#035', name: '', height: '', types:'' },
    {dexNum: '#036', name: '', height: '', types:'' },
    {dexNum: '#037', name: '', height: '', types:'' },
    {dexNum: '#038', name: '', height: '', types:'' },
    {dexNum: '#039', name: '', height: '', types:'' },
    {dexNum: '#040', name: '', height: '', types:'' },
    {dexNum: '#041', name: '', height: '', types:'' },
    {dexNum: '#042', name: '', height: '', types:'' },
    {dexNum: '#043', name: '', height: '', types:'' },
    {dexNum: '#044', name: '', height: '', types:'' },
    {dexNum: '#045', name: '', height: '', types:'' },
    {dexNum: '#046', name: '', height: '', types:'' },
    {dexNum: '#047', name: '', height: '', types:'' },
    {dexNum: '#048', name: '', height: '', types:'' },
    {dexNum: '#049', name: '', height: '', types:'' },
    {dexNum: '#050', name: '', height: '', types:'' },
    {dexNum: '#051', name: '', height: '', types:'' },
    {dexNum: '#052', name: '', height: '', types:'' },
    {dexNum: '#053', name: '', height: '', types:'' },
    {dexNum: '#054', name: '', height: '', types:'' },
    {dexNum: '#055', name: '', height: '', types:'' },
    {dexNum: '#056', name: '', height: '', types:'' },
    {dexNum: '#057', name: '', height: '', types:'' },
    {dexNum: '#058', name: '', height: '', types:'' },
    {dexNum: '#059', name: '', height: '', types:'' },
    {dexNum: '#060', name: '', height: '', types:'' },
    {dexNum: '#061', name: '', height: '', types:'' },
    {dexNum: '#062', name: '', height: '', types:'' },
    {dexNum: '#063', name: '', height: '', types:'' },
    {dexNum: '#064', name: '', height: '', types:'' },
    {dexNum: '#065', name: '', height: '', types:'' },
    {dexNum: '#066', name: '', height: '', types:'' },
    {dexNum: '#067', name: '', height: '', types:'' },
    {dexNum: '#068', name: '', height: '', types:'' },
    {dexNum: '#069', name: '', height: '', types:'' },
    {dexNum: '#070', name: '', height: '', types:'' },
    {dexNum: '#071', name: '', height: '', types:'' },
    {dexNum: '#072', name: '', height: '', types:'' },
    {dexNum: '#073', name: '', height: '', types:'' },
    {dexNum: '#074', name: '', height: '', types:'' },
    {dexNum: '#075', name: '', height: '', types:'' },
    {dexNum: '#076', name: '', height: '', types:'' },
    {dexNum: '#077', name: '', height: '', types:'' },
    {dexNum: '#078', name: '', height: '', types:'' },
    {dexNum: '#079', name: '', height: '', types:'' },
    {dexNum: '#080', name: '', height: '', types:'' },
    {dexNum: '#081', name: '', height: '', types:'' },
    {dexNum: '#082', name: '', height: '', types:'' },
    {dexNum: '#083', name: '', height: '', types:'' },
    {dexNum: '#084', name: '', height: '', types:'' },
    {dexNum: '#085', name: '', height: '', types:'' },
    {dexNum: '#086', name: '', height: '', types:'' },
    {dexNum: '#087', name: '', height: '', types:'' },
    {dexNum: '#088', name: '', height: '', types:'' },
    {dexNum: '#089', name: '', height: '', types:'' },
    {dexNum: '#090', name: '', height: '', types:'' },
    {dexNum: '#091', name: '', height: '', types:'' },
    {dexNum: '#092', name: '', height: '', types:'' },
    {dexNum: '#093', name: '', height: '', types:'' },
    {dexNum: '#094', name: '', height: '', types:'' },
    {dexNum: '#095', name: '', height: '', types:'' },
    {dexNum: '#096', name: '', height: '', types:'' },
    {dexNum: '#097', name: '', height: '', types:'' },
    {dexNum: '#098', name: '', height: '', types:'' },
    {dexNum: '#099', name: '', height: '', types:'' },
    {dexNum: '#100', name: '', height: '', types:'' },
    {dexNum: '#101', name: '', height: '', types:'' },
    {dexNum: '#102', name: '', height: '', types:'' },
    {dexNum: '#103', name: '', height: '', types:'' },
    {dexNum: '#104', name: '', height: '', types:'' },
    {dexNum: '#105', name: '', height: '', types:'' },
    {dexNum: '#106', name: '', height: '', types:'' },
    {dexNum: '#107', name: '', height: '', types:'' },
    {dexNum: '#108', name: '', height: '', types:'' },
    {dexNum: '#109', name: '', height: '', types:'' },
    {dexNum: '#110', name: '', height: '', types:'' },
    {dexNum: '#111', name: '', height: '', types:'' },
    {dexNum: '#112', name: '', height: '', types:'' },
    {dexNum: '#113', name: '', height: '', types:'' },
    {dexNum: '#114', name: '', height: '', types:'' },
    {dexNum: '#115', name: '', height: '', types:'' },
    {dexNum: '#116', name: '', height: '', types:'' },
    {dexNum: '#117', name: '', height: '', types:'' },
    {dexNum: '#118', name: '', height: '', types:'' },
    {dexNum: '#119', name: '', height: '', types:'' },
    {dexNum: '#120', name: '', height: '', types:'' },
    {dexNum: '#121', name: '', height: '', types:'' },
    {dexNum: '#122', name: '', height: '', types:'' },
    {dexNum: '#123', name: '', height: '', types:'' },
    {dexNum: '#124', name: '', height: '', types:'' },
    {dexNum: '#125', name: '', height: '', types:'' },
    {dexNum: '#126', name: '', height: '', types:'' },
    {dexNum: '#127', name: '', height: '', types:'' },
    {dexNum: '#128', name: '', height: '', types:'' },
    {dexNum: '#129', name: '', height: '', types:'' },
    {dexNum: '#130', name: '', height: '', types:'' },
    {dexNum: '#131', name: '', height: '', types:'' },
    {dexNum: '#132', name: '', height: '', types:'' },
    {dexNum: '#133', name: '', height: '', types:'' },
    {dexNum: '#134', name: '', height: '', types:'' },
    {dexNum: '#135', name: '', height: '', types:'' },
    {dexNum: '#136', name: '', height: '', types:'' },
    {dexNum: '#137', name: '', height: '', types:'' },
    {dexNum: '#138', name: '', height: '', types:'' },
    {dexNum: '#139', name: '', height: '', types:'' },
    {dexNum: '#140', name: '', height: '', types:'' },
    {dexNum: '#141', name: '', height: '', types:'' },
    {dexNum: '#142', name: '', height: '', types:'' },
    {dexNum: '#143', name: '', height: '', types:'' },
    {dexNum: '#144', name: '', height: '', types:'' },
    {dexNum: '#145', name: '', height: '', types:'' },
    {dexNum: '#146', name: '', height: '', types:'' },
    {dexNum: '#147', name: '', height: '', types:'' },
    {dexNum: '#148', name: '', height: '', types:'' },
    {dexNum: '#149', name: '', height: '', types:'' },
    {dexNum: '#150', name: '', height: '', types:'' },
    {dexNum: '#151', name: '', height: '', types:'' },
]