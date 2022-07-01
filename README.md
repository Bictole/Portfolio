Welcome on my portfolio !

Link : https://victorsimonin.fr

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# OCR [![Profile][title-img]][profile]

<img src="https://github.com/Bictole/OCR/blob/master/Test_img/readme_images/logo.png" align="right" alt="The OCR Logo" width="180" height="180">

OCR is an Optical Character Recognition made in C. The goal was to perform a binarization, a segmentation and send the matrices in a neural network to recognize the characters in an image.

We have :

* **Black_White module** that is supposed to binarize the images into a black and white only image.
* **Interface module** which contain the interface program, made with SDL 2.0
* **Neural_Network module**, the machine learning part of the OCR.
* **Reconstruction module**, this part comes after the segmentation and the neural network, where our code needs to reconstruct the initial text from the image into a buffer.
* **Segmentation module** is the part of the program where the input image is segmented into different paragraphs, lines, words and finally letters and that send the pixels matrices into the neural network.
* **Tools module**, contains several uselful tools, especially for the SDL library manipulation.


[title-img]:https://img.shields.io/badge/-Bictole-pink
[profile]:https://github.com/bictole


## How It Works

The OCR contains a CLI tool which is used to demonstrate the **segmentation** part of the project.

<img src="https://github.com/Bictole/OCR/blob/master/Test_img/readme_images/segmented.png" alt="Segmented image">

### Usage

```bash
make
./src/main
```

The trash files produced by the compilation could be removed by :

```bash
make clean
```

or

```bash
make properclean
```

## Interface

The interface is made with SDL 2.0, it's a really simple component that need to be refactored. Here is a diagram that demonstrate its usability.

<img src="https://github.com/Bictole/OCR/blob/master/Test_img/readme_images/interface.png" alt="Interface">

## Costs

<img src="https://github.com/Bictole/OCR/blob/master/Test_img/readme_images/costs.png" alt="The outrageous Costs">