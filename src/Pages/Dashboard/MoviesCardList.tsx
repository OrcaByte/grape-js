import React from 'react';
import { Card, CardBody, CardFooter, Heading, Image, Stack, Text, Button } from '@chakra-ui/react';
import { movieDialogStateManager, useMovieDialogStateManager } from './DialogStateManager';

export default function MoviesCardList() {
  const { movies, selectedMovie } = useMovieDialogStateManager('isOpen', 'movies', 'selectedMovie');
  if (movies.length === 0) return null;
  return (
    <div>
      {movies.map((movie: any, index) => (
        <Card
          direction={{ base: 'column', sm: 'row' }}
          key={movie.date}
          marginBottom="4"
          overflow="hidden"
          variant="outline"
          borderWidth="1px"
          cursor={'pointer'}
          borderColor={selectedMovie === index ? 'blue.500' : 'gray.200'}
          onClick={() => movieDialogStateManager.setSelectedMovie(index)}
        >
          <Image
            objectFit="cover"
            maxW={{ base: '100%', sm: '120px' }}
            src={movie.link || 'https://bit.ly/2Z4KKcF'}
            alt="Caffe Latte"
          />

          <Stack>
            <CardBody p={2}>
              <Heading fontSize={'16px'} size="sm">
                {movie.title}
              </Heading>
              <Text py="1" fontSize={'14px'} noOfLines={1} color={'gray.500'}>
                {movie.date}
              </Text>
              <Text pt="1" fontSize={'12px'} noOfLines={3}>
                {movie.desc}
              </Text>
            </CardBody>
          </Stack>
        </Card>
      ))}
    </div>
  );
}
