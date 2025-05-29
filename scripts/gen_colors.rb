require 'json'
require 'nokogiri'

scss_file_path = "./palette/palette.scss"
icons_path = "./public/icons.json"

palette = JSON.parse(File.read("./palette/palette-data.json"))
icons = JSON.parse(File.read("./public/icons.json"))

puts "Generating new colors"

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

puts "Wrote Sass file"

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

puts "Generated icons"

# SVG generating

Dir.glob("./src/components/**/*.{tsx}").each do |file|
  begin
    next if File.basename(file) == "Media.tsx"
    file_content = File.read(file)
    modified = false

      updated_content = file_content.gsub(/<svg.*?<\/svg>/m) do |svg_block|
      begin
        doc = Nokogiri::HTML.fragment(svg_block)

        doc.css('svg').each do |svg|
          svg['stroke'] = "##{palette["purple"]}" 
          if svg['fill'] && svg['fill'].downcase != 'none'
            svg['fill'] = "##{palette['purple']}"
          end
        end

        doc.css('svg path').each do |path|
          path['stroke'] = "##{palette["purple"]}"
          if path['fill'] && path['fill'].downcase != 'none'
            path['fill'] = "##{palette['purple']}"
          end
        end
        doc.css('[stroke-width]').each   { |el| el['strokeWidth']    = el.delete('stroke-width') }
        doc.css('[strokewidth]').each    { |el| el['strokeWidth']    = el.delete('strokewidth') }
        doc.css('[stroke-linecap]').each { |el| el['strokeLinecap']  = el.delete('stroke-linecap') }
        doc.css('[strokelinecap]').each  { |el| el['strokeLinecap']  = el.delete('strokelinecap') }
        doc.css('[stroke-linejoin]').each{ |el| el['strokeLinejoin'] = el.delete('stroke-linejoin') }
        doc.css('[strokelinejoin]').each { |el| el['strokeLinejoin'] = el.delete('strokelinejoin') }
        doc.css('[fill-rule]').each      { |el| el['fillRule']       = el.delete('fill-rule') }
        doc.css('[fillrule]').each       { |el| el['fillRule']       = el.delete('fillrule') }
        doc.css('[clip-rule]').each      { |el| el['clipRule']       = el.delete('clip-rule') }
        doc.css('[cliprule]').each       { |el| el['clipRule']       = el.delete('cliprule') }
        doc.css('[viewbox]').each        { |el| el['viewBox']        = el.delete('viewbox') }
        doc.css('[view-box]').each       { |el| el['viewBox']        = el.delete('view-box') }
        doc.css('[classname]').each      { |el| el['className']      = el.delete('classname') }
        doc.css('[class]').each          { |el| el['className']      = el.delete('class') }

        modified = true
        doc.to_html
      rescue
        svg_block
      end
    end

    if modified
      File.write(file, updated_content)
      puts "Updated #{file}"
    else
      puts "No update in #{file}"
    end
  rescue => e
    puts "Error: #{e}"

  end
end

puts "Generated "

puts "Generated colors"
