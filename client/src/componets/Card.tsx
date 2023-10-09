import React from "react";
import { cn } from "~/libs/utils";
import images_1 from "~/assets/images/demo-perfume-1.jpeg";
import Heading from "./Heading";
import Typography from "./Typography";
import Box from "./Box";
import FlexBox from "./FlexBox";
import Button from "./Button";
import { RiHeart3Line, RiShoppingBag2Line } from "react-icons/ri";

interface CardProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children?: React.ReactNode;
  data: any;
}

const Card = ({ children, data, className, ...props }: CardProps) => {
  return (
    <Box
      {...props}
      className={cn(
        "w-full max-w-md mx-auto rounded-xl overflow-hidden bg-light text-sm hover:shadow",
        className
      )}
    >
      <Box className="w-full">
        <img src={images_1 || "-"} alt={data.name || "-"} />
      </Box>
      <Box className="w-full p-2">
        <Heading level="h6" className="capitalize">
          {data.name || "-"}
        </Heading>
        <Typography clamp="yes" clampLine="two" className="text-muted-normal">
          {data.desc || "-"}
        </Typography>
        <Box className="flex items-center justify-between mt-16">
          <Typography>{data.price || "-"} so'm</Typography>
          <FlexBox gap="two">
            <Button variant="muted-ghost">
              <RiHeart3Line />
            </Button>
            <Button variant="muted-ghost">
              <RiShoppingBag2Line />
            </Button>
          </FlexBox>
        </Box>
      </Box>
    </Box>
  );
};

export default Card;
