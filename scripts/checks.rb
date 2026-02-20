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

$success = 0;

checks = [
  {
    'name' => "Prettier",
    'command' => "bun run format:check",
  },
  {
    'name' => "ESLint",
    'command' => "bun run lint",
  },
  {
    'name' => "Svelte",
    'command' => "bun run check",
  },
  {
    'name' => 'Build',
    'command' => "bun run build"
  }
]

checks.each do |check|
  run_check(check['name'], check['command'])
end

puts "#{$success}/#{checks.length} checks passed."
puts "All checks completed."

exit(1) if $success < checks.length
