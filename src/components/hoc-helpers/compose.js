const compose = (...funcs) => component =>
  funcs.reduceRight((prevResult, fn) => fn(prevResult), component);

export default compose;
