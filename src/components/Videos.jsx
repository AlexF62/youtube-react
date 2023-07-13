import React from 'react';
import { Stack, Box } from '@mui/material';
import VideoCart from './VideoCart';
import ChannelCard from './ChannelCard';
const Videos = ({ videos }) => {
    return (
        <Stack direction='row' flexWrap='wrap' justifyContent='start' gap={2}>
            {videos.map((item, idx) => (
                <Box key={idx}>
                    {item.id.videoid && <VideoCart video={item} />}
                    {item.id.channelId && <ChannelCard channelDetail={item} />}
                </Box>
            ))}
        </Stack>
    );
};

export default Videos;
