class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}

function reliableMultiply(a, b) {
try 
{
    return primitiveMultiply(a, b); 
}
catch (MultiplicatorUnitFailure)
{
    reliableMultiply(a, b);
}
}

console.log(reliableMultiply(8, 8));
