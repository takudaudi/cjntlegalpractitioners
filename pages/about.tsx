import React from 'react';
import { useRouter } from 'next/router';
import { Container, VStack, Text, Heading, Box, Avatar, Button, Link } from '@chakra-ui/react';
import { FaCalendarAlt } from 'react-icons/fa';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const AboutPage: React.FC = () => {
  const router = useRouter();

  const handleBookAppointment = () => {
    router.push('/#BookAppointment'); // Navigate to the contact page
  };

  return (
    <>
      <NavBar />
      <Container maxW="3xl" mt={10} mb={10} centerContent>
        <VStack spacing={10} align="stretch">
          <Heading size="xl" textAlign="center" color="gray.700">
            About CJNT
          </Heading>
          <Box>
            <Avatar size="xl" name="Dr. Smith" src="https://images.pexels.com/photos/4427623/pexels-photo-4427623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" mb={4} />
            <Text fontSize="lg" color="gray.600">
             CJNT is a new experts in legal Advice Firm with over
              lawyers of 5 + years of experience. Our dedication to patiently care and
             advice our clients to inforce a reputation as a trusted legal Advisors.
             
            </Text>
            <Text fontSize="lg" color="gray.600" mt={4}>
              At CJNT&apos;s Law Center, we are committed to delivering
              personalized and compassionate legal services to our clients.
              Our state-of-the-art facilities and experienced legal staff ensure
              that you receive the highest quality service.
            </Text>
            <Button
              leftIcon={<FaCalendarAlt />}
              colorScheme="teal"
              variant="solid"
              mt={6}
              alignSelf="center"
              onClick={handleBookAppointment}
            >
              <Link href='/#BookAppointment'>
                Book Appointment
              </Link>
            </Button>
          </Box>
        </VStack>
      </Container>
      <Footer />
    </>
  );
};

export default AboutPage;

