export const getOvinos = (req,res) => res.send('Obteniendo Todos los ovinos...');
export const findOvino = (req,res) => res.send('Buscando Ovino por CabaniaId y Like Nombre...');
export const getOvinoById = (req,res) => res.send('Buscando Ovino por Id...');
export const getParents = (req,res) => res.send('Obteniendo Padre de ovinos...');
export const getOvinoByCabania = (req,res) => res.send('Obteniendo ovinos por IDCabanias...');
export const postOvino = (req,res) => res.send('Insert Ovino...');
export const putOvino = (req,res) => res.send('Modificando Ovino...');
export const deleteOvino = (req,res) => res.send('Borrando Ovino...');
export const getDatosOvino = (req,res) => res.send('Obteniendo Datos de ovino para modificar...');