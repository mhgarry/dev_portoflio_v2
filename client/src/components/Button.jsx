import { Button } from "@material-tailwind/react";
 
export default function ExampleButton({ count, setCount }) {
  return (
    <Button 
    color="white" 
    onClick={() => setCount((count) => count + 1)}
    ripple={false}
    variant='outlined'>
      Count is {count}
    </Button>
  )
}