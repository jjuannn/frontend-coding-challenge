import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import ColoredText from "components/ColoredText";
import { FC } from "react";

const PresentationTitle: FC = () => {
  return (
    <Flex
      margin="43px"
      justifyContent={"center"}
      direction="column"
      alignItems={"center"}
    >
      <Text
        textTransform={"uppercase"}
        size={{ base: "mobileL1", lg: "desktopL1" }}
        variant={"allCapsL1"}
        color="neutrals.600"
      >
        EXPLORE THE
      </Text>
      <ColoredText
        TextElement={Heading}
        text="TECH"
        size={{ base: "mobileL1", lg: "desktopL1" }}
      />
      <Heading
        marginBottom={"20px"}
        size={{ base: "mobileL1", lg: "desktopL1" }}
        textTransform={"uppercase"}
      >
        ZONE
      </Heading>
      <Text
        size="mobileL1"
        lineHeight={"24px"}
        fontWeight="600"
        textAlign={"center"}
        color="neutrals.600"
        marginBottom="40px"
      >
        Here you’ll be able to redeem all of your hard-earned Aeropoints and
        exchange them for cool tech.
      </Text>
      <Button
        height={"64px"}
        width="305px"
        background="brand.default"
        _hover={{ background: "brand.hover" }}
        colorScheme={"brand.default"}
        color="white"
        padding="20px 48px"
        borderRadius={"28px"}
        gap="10px"
      >
        <Text size="mobileL1" variant={"allCapsL1"}>
          view all products
        </Text>
      </Button>
    </Flex>
  );
};

export { PresentationTitle };
