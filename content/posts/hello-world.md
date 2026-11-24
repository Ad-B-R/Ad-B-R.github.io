---
title: "hello, world"
date: 2026-11-25
slug: "hello-world"
description: "Placeholder post: checks that math and code render."
tags: ["meta"]
# TODO: placeholder. Delete this file (or set draft: true) once you write a real post.
---

This is a placeholder post. It's here to check that math and code render.
Delete it once you write your first real post.

## math (KaTeX, rendered at build time)

Inline math uses single dollars: the attention weights are $\alpha_{ij} = \mathrm{softmax}_j(q_i^\top k_j / \sqrt{d_k})$.

Display math uses double dollars:

$$
\mathrm{Attention}(Q, K, V) = \mathrm{softmax}\!\left(\frac{QK^\top}{\sqrt{d_k}}\right) V
$$

Need a literal dollar sign? Escape it: \$5.

## code: CUDA

```cuda
// y = max(x, 0), one thread per element
__global__ void relu_forward(const float* __restrict__ x,
                             float* __restrict__ y, int n) {
    int i = blockIdx.x * blockDim.x + threadIdx.x;
    if (i < n) {
        y[i] = fmaxf(x[i], 0.0f);
    }
}

void launch_relu(const float* d_x, float* d_y, int n) {
    const int threads = 256;
    const int blocks  = (n + threads - 1) / threads;
    relu_forward<<<blocks, threads>>>(d_x, d_y, n);
}
```

## code: C++

```cpp
#include <vector>
#include <algorithm>

std::vector<float> relu(const std::vector<float>& x) {
    std::vector<float> y(x.size());
    std::transform(x.begin(), x.end(), y.begin(),
                   [](float v) { return std::max(v, 0.0f); });
    return y;
}
```

## code: Python

```python
import torch

def scaled_dot_product_attention(q, k, v):
    d_k = q.size(-1)
    scores = q @ k.transpose(-2, -1) / d_k ** 0.5
    return torch.softmax(scores, dim=-1) @ v
```
