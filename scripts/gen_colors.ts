import palette from "../palette/palette-data.json";
import { writeFile } from "fs";

// scss palette write
writeFile(
  "./palette/palette.scss",`:root {
	--base: ${palette.base};
    	--pink: ${palette.pink};
    	--text: ${palette.text};
	--subtext0: ${palette.subtext0};
	--subtext1: ${palette.subtext1};
        --purple: ${palette.purple};
        --crust: ${palette.crust};
        --mantle: ${palette.mantle};
        --sapphire: ${palette.sapphire};
        --surface0: ${palette.surface0};
        --surface1: ${palette.surface1};
        --surface2: ${palette.surface2};
	--overlay0: ${palette.overlay0};
	--overlay1: ${palette.overlay1};
	--overlay2: ${palette.overlay2};
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
