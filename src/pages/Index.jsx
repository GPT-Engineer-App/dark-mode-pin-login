import React, { useState } from "react";
import { Box, Button, ChakraProvider, Container, Flex, Grid, GridItem, Heading, HStack, Input, Stack, Text, theme, VStack } from "@chakra-ui/react";
import { FaUpload, FaDownload, FaPowerOff, FaSignOutAlt } from "react-icons/fa";

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [pin, setPin] = useState("");

  const handleNumberClick = (number) => {
    if (pin.length < 4) {
      setPin(pin + number);
    }
  };

  const handleBackspace = () => {
    setPin(pin.slice(0, -1));
  };

  const handleEnter = () => {
    if (pin === "1234") {
      // Example PIN
      setIsLoggedIn(true);
    } else {
      alert("Incorrect PIN");
      setPin("");
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
    setPin("");
  };

  return (
    <ChakraProvider theme={theme}>
      <Box bg="gray.800" minH="100vh" color="white">
        {!isLoggedIn ? (
          <Container centerContent>
            <VStack spacing={4} py={20}>
              <Heading as="h1">FlexNode 4</Heading>
              <Text>Name: Something</Text>
              <Text>ID: 1</Text>
              <Input placeholder="Enter PIN" value={pin} readOnly type="password" />
              <Grid templateColumns="repeat(3, 1fr)" gap={2}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
                  <Button key={number} onClick={() => handleNumberClick(number.toString())}>
                    {number}
                  </Button>
                ))}
                <GridItem colSpan={2}>
                  <Button onClick={handleBackspace}>Back</Button>
                </GridItem>
                <Button onClick={handleEnter}>Enter</Button>
              </Grid>
            </VStack>
          </Container>
        ) : (
          <Container maxW="container.xl">
            <Flex justify="space-between" align="center" py={4}>
              <Heading as="h1">FlexNode 4</Heading>
              <Stack direction="row" spacing={4}>
                <Button leftIcon={<FaUpload />} colorScheme="blue">
                  Upload
                </Button>
                <Button leftIcon={<FaDownload />} colorScheme="teal">
                  Download
                </Button>
                <Button leftIcon={<FaPowerOff />} colorScheme="red">
                  Reboot
                </Button>
                <Button leftIcon={<FaSignOutAlt />} colorScheme="gray" onClick={logout}>
                  Logout
                </Button>
              </Stack>
            </Flex>
            <Grid templateColumns="repeat(5, 1fr)" gap={6} py={4}>
              <StatWidget title="CPU" main="50%" sub="70°F" />
              <StatWidget title="Network" main="100 Mb/s" sub="1200 pps" />
              <StatWidget title="Storage" main="450 MB" sub="550 MB free" />
              <StatWidget title="Environment" main="85°F" sub="40% humidity" />
              <StatWidget title="Power" main="300 Watts" sub="POE" />
            </Grid>
            <SettingsSection />
          </Container>
        )}
      </Box>
    </ChakraProvider>
  );
};

const StatWidget = ({ title, main, sub }) => (
  <Box bg="gray.700" p={4} borderRadius="md">
    <Text fontWeight="bold">{title}</Text>
    <Text>{main}</Text>
    <Text fontSize="sm">{sub}</Text>
  </Box>
);

const SettingsSection = () => (
  <Box bg="gray.700" p={4} borderRadius="md" mt={6}>
    <Heading size="md" mb={4}>
      Node Settings
    </Heading>
    <Grid templateColumns="repeat(2, 1fr)" gap={6}>
      <SettingItem label="Node Name" type="text" />
      <SettingItem label="Node ID" type="number" />
      <SettingItem label="Illumination" type="select" options={["Bright", "Normal", "Low", "Off"]} />
    </Grid>
    <PortSettings />
  </Box>
);

const PortSettings = () => (
  <Box bg="gray.700" p={4} borderRadius="md" mt={6}>
    <HStack spacing={4}>
      {[
        { name: "E1", color: "#FFD700", label: "Ethernet 1" },
        { name: "D1", color: "#FF6347", label: "DMX 1" },
        { name: "D2", color: "#4682B4", label: "DMX 2" },
        { name: "D3", color: "#32CD32", label: "DMX 3" },
        { name: "D4", color: "#DA70D6", label: "DMX 4" },
      ].map((port) => (
        <Box w="full" bg="gray.600" p={4} borderRadius="md" position="relative">
          <Box h="10px" bg={port.color} borderRadius="md" mb={2} />
          <Text fontWeight="bold">{port.name}</Text>
          <Text position="absolute" top="0" right="0" fontSize="sm" fontWeight="normal">
            {port.label}
          </Text>
        </Box>
      ))}
    </HStack>
  </Box>
);

const SettingItem = ({ label, type, options }) => (
  <Box>
    <Text mb={2}>{label}</Text>
    {type === "select" ? (
      <Input as="select" color="white">
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </Input>
    ) : (
      <Input type={type} />
    )}
  </Box>
);

export default Index;
