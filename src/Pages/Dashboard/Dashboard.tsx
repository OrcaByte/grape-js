import { Box, Card, CardBody, Heading, Stack, Image } from '@chakra-ui/react';
// import { useNavigate } from 'react-router-dom';
import { movieDialogStateManager } from './DialogStateManager';

export default function Dashboard() {
  // const navigate = useNavigate();
  const onCreateTemplate = () => {
    // navigate('/studio');
    movieDialogStateManager.openDialog();
  };
  return (
    <div>
      <Box p={2} cursor={'pointer'}>
        <Card maxW="sm" onClick={onCreateTemplate}>
          <CardBody>
            <Image
              src="https://images.unsplash.com/photo-1613256168695-b13ed5ba9500?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDIyODZ8MHwxfHNlYXJjaHwxfHxwbHVzfGVufDB8fHx8MTY5Njk3MTY2NXww&ixlib=rb-4.0.3&q=80&w=1080"
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">Create new Template</Heading>
            </Stack>
          </CardBody>
        </Card>
      </Box>
    </div>
  );
}
