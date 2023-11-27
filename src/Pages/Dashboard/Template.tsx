import { Box, Card, CardBody, Heading, Image, Stack } from "@chakra-ui/react";


function Template() {
  return (
    <div>
        <Box p={2} cursor={'pointer'}>
            <Card maxW="sm" >
                <CardBody>
                    <Image src="src/assets/rock.jpg" alt="template" borderRadius="lg"/>
                    
                    <Stack mt="6" spacing="3">
                        <Heading size="md">The Woman King</Heading>
                    </Stack>
                </CardBody>
            </Card>
        </Box>
    </div>
  )
}

export default Template;