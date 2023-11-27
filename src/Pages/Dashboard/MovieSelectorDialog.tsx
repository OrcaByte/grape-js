import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  Box,
  InputGroup,
  InputRightElement,
  Spinner,
} from '@chakra-ui/react';
import { movieDialogStateManager, useMovieDialogStateManager } from './DialogStateManager';
import MoviesCardList from './MoviesCardList';
import { useState } from 'react';
import { SearchIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';

export default function MovieSelectorDialog() {
  const navigate = useNavigate();
  const { isOpen, isLoading, selectedMovie, isSearching } = useMovieDialogStateManager(
    'isOpen',
    'selectedMovie',
    'isLoading',
    'isSearching',
  );

  const [searchTxt, setSearchTxt] = useState('The woman king');

  const onGenerateTemplate = () => {
    if (selectedMovie !== undefined) {
      movieDialogStateManager.searchSelectedMovieInfo(() => {
        navigate('/studio');
      });
      // movieDialogStateManager.closeDialog();
    }
  };

  return (
    <Modal onClose={movieDialogStateManager.closeDialog} size={'2xl'} isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Search Movie</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box paddingBottom={4} maxH={'60vh'}>
            <InputGroup size="md">
              <Input
                value={searchTxt}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    movieDialogStateManager.searchMovies(searchTxt);
                  }
                }}
                onChange={(e) => setSearchTxt(e.target.value)}
                placeholder="Search movie here"
              />
              <InputRightElement>
                {isLoading ? (
                  <Spinner size="sm" />
                ) : (
                  <Button h="1.75rem" mr={2} onClick={() => movieDialogStateManager.searchMovies(searchTxt)}>
                    <SearchIcon />
                  </Button>
                )}
              </InputRightElement>
            </InputGroup>
          </Box>
          <Box overflowY="scroll" maxH={'60vh'}>
            <MoviesCardList />
          </Box>
        </ModalBody>
        <ModalFooter>
          <Button onClick={movieDialogStateManager.closeDialog}>Close</Button>
          {selectedMovie !== undefined && (
            <Button
              disabled={isSearching}
              colorScheme={isSearching ? 'blue' : 'green'}
              ml={3}
              onClick={onGenerateTemplate}
            >
              {isSearching ? (
                <>
                  <Spinner size="sm" />
                </>
              ) : (
                <>Generate Template</>
              )}
            </Button>
          )}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
