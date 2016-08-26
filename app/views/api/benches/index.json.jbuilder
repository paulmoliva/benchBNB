
@benches.each do |bench|
  json.partial! 'bench.json.jbuilder', bench: bench
end
