'use client';
import styled from 'styled-components';
import Sidebar from '@/app/components/Sidebar';


const LayoutContainer = styled.div`
  display: flex;
  height: 100vh;
  background-color: #f9f9f9; // Light theme background
  /* Add dark theme styles later */
`;

const MainContent = styled.main`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export default function ChatLayout({ children }: { children: React.ReactNode }) {
  return (
    <LayoutContainer>
      <Sidebar /> {/* Optional Sidebar */}
      <MainContent>
        {children} {/* Where ChatWindow and Input will go */}
      </MainContent>
    </LayoutContainer>
  );
}
