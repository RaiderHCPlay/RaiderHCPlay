require 'json'

scss_file_path = "./palette/palette.scss"
icons_path = "./public/icons.json"

palette = JSON.parse(File.read("./palette/palette-data.json"))
icons = JSON.parse(File.read("./public/icons.json"))

# Scss writing
File.write(scss_file_path, <<~SCSS)
  :root {
    --base: ##{palette['base']};
    --pink: ##{palette['pink']};
    --text: ##{palette['text']};
    --subtext0: ##{palette['subtext0']};
    --subtext1: ##{palette['subtext1']};
    --purple: ##{palette['purple']};
    --crust: ##{palette['crust']};
    --mantle: ##{palette['mantle']};
    --sapphire: ##{palette['sapphire']};
    --surface0: ##{palette['surface0']};
    --surface1: ##{palette['surface1']};
    --surface2: ##{palette['surface2']};
    --overlay0: ##{palette['overlay0']};
    --overlay1: ##{palette['overlay1']};
    --overlay2: ##{palette['overlay2']};
    --yellow: ##{palette['yellow']};
    --peach: ##{palette['peach']};
    --green: ##{palette['green']};
    --blue: ##{palette['blue']};
    --orange: ##{palette['orange']};
    --sky: ##{palette['sky']};
    --red: ##{palette['red']};
    --black: ##{palette['black']};
  }
SCSS


# Icon generating
colored_icons = []

icons.each do |key|
colored_icons.push({
    "name" => key["name"],
    "icon" => key["template_icon"] + palette[key["color"]],
    "template_icon" => key["template_icon"],
    "category" => key["category"],
    "color" => key["color"]
  })
end

File.write(icons_path, colored_icons.to_json())

puts "Generated colors"
