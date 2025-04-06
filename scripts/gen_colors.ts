import palette from "../palette/palette-data.json";
import { writeFile } from "fs";

// scss palette write
writeFile(
  "./palette/palette.scss",`:root {
	--base: ${palette.base};
    	--pink: ${palette.pink};
    	--text: ${palette.text};
        --purple: ${palette.purple};
        --crust: ${palette.crust};
        --mantle: ${palette.mantle};
        --sapphire: ${palette.sapphire};
        --surface0: ${palette.surface0};
        --surface1: ${palette.surface1};
        --surface2: ${palette.surface2};
        --yellow: ${palette.yellow};
        --peach: ${palette.peach};
       	--green: ${palette.green};
    	--blue: ${palette.blue};
    	--orange: ${palette.orange};
    	--sky: ${palette.sky};
    	--red: ${palette.red};
    	--black: ${palette.black};
}
`,
  (err) => {
    return err;
  },
);
