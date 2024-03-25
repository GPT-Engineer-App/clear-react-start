import React, { useState } from "react";
import { Input, Button, Box, Text, Image } from "@chakra-ui/react";

const ColorTranslator = () => {
  const [colorValue, setColorValue] = useState("");
  const [colorName, setColorName] = useState("");
  const [swatchUrl, setSwatchUrl] = useState("");

  const handleTranslate = async () => {
    const response = await fetch(`https://api.color.pizza/v1/?values=${colorValue}&noduplicates=true`);
    const data = await response.json();
    setColorName(data.colors[0].name);
    setSwatchUrl(data.colors[0].swatchImg.svg);
  };

  return (
    <Box>
      <Input value={colorValue} onChange={(e) => setColorValue(e.target.value)} placeholder="Enter hex color value" maxWidth="200px" />
      <Button onClick={handleTranslate} marginLeft="10px">
        Translate
      </Button>
      {colorName && (
        <Box marginTop="20px">
          <Text fontSize="xl" marginBottom="10px">
            {colorName}
          </Text>
          <Image src={swatchUrl} alt={colorName} />
        </Box>
      )}
    </Box>
  );
};

export default ColorTranslator;
