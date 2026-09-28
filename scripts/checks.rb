def run_check(name, command)
  puts "Running: #{name} check"
  check_output = system(command)
  if check_output
    puts "#{name} check passed."
    $success += 1
  else
    puts "#{name} check failed."
  end
end

$success = 0

checks = [
  {
    'name' => 'Oxfmt',
    'command' => 'pnpm run format:check'
  },
  {
    'name' => 'Oxlint',
    'command' => 'pnpm run lint'
  },
  {
    'name' => 'Svelte',
    'command' => 'pnpm run check'
  },
  {
    'name' => 'Build',
    'command' => 'pnpm run build'
  }
]

checks.each do |check|
  run_check(check['name'], check['command'])
end

puts "#{$success}/#{checks.length} checks passed."
puts 'All checks completed.'

exit(1) if $success < checks.length
