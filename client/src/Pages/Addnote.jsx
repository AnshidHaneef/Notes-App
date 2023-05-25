import {TextField , Button} from '@mui/material'

const Addnote = () => {

    const handleSubmit = (event) => {
      event.preventDefault();
      // Handle form submission logic here
    };
  
  
  return (
    <>
    <form onSubmit={handleSubmit}>
    <TextField label="Name" variant="outlined" fullWidth />
    <TextField label="Email" variant="outlined" fullWidth />
    <TextField
      label="Message"
      variant="outlined"
      multiline
      rows={4}
      fullWidth
    />
    <Button type="submit" variant="contained" color="primary">
      Submit
    </Button>
  </form>
    </>
  );
};

export default Addnote;
