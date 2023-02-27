import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
	showProfileData?: boolean;
}

export default function Profile({ showProfileData = true }: ProfileProps) {
	return (
		<Flex align='center'>
			{showProfileData &&
				<Box mr='4' textAlign='right'>
					<Text>Thiago Ivens Rech</Text>
					<Text color='gray.300' fontSize='small'>thiagorech2121@gmail.com</Text>
				</Box>
			}

			<Avatar size='md' name='Thiago Ivens Rech' src='https://github.com/ThiagoIvens.png' />
		</Flex>
	);
}