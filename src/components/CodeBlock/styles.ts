import styled from 'styled-components';

export const Container = styled.div`
  .wrapper {
    position: relative;
    margin: 40px 0;
  }

  pre {
    border-radius: 4px 0 4px 4px;
    padding: 20px;
    position: relative;
    overflow-x: auto;
    cursor: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAaCAMAAABigZc2AAAACVBMVEX///8AAAD///9+749PAAAAAXRSTlMAQObYZgAAAFpJREFUeNp9jUEOwEAIAhn+/+imjbs1bC0XzQioSUAAYZs0mcVY051RbGXfFsyxibTVHXhuhXYlbuRGPbe7kz3g0wf679OuizDBdCaberLE4AsjGliD02eNugA+MQFAPqynHQAAAABJRU5ErkJggg==),
      auto;
  }

  .lang-tab {
    border-radius: 4px 4px 0 0;
    font-family: SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono',
      'Courier New', monospace;
    font-size: 14px;
    font-weight: 600;
    padding: 4px 12px;
    position: absolute;
    text-transform: uppercase;
    top: 0;
    transform: translateY(-100%);
    right: 0;
  }

  textarea {
    bottom: 10px;
    height: 1px;
    left: 10px;
    position: absolute;
    width: 1px;
    z-index: -1;
  }
`;
