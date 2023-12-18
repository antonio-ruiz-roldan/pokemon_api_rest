import {PORT} from "./constants/pokemonApi.constanst.ts";

import app from "./app";

app.listen(PORT, () => console.log(`Estamos sobre el puerto ${PORT}`));