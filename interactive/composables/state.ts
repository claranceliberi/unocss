import { createGenerator } from '@unocss/core'
import { breakpointsTailwind } from '@vueuse/core'
import { createSearch } from '@unocss/shared-docs'
import type { ResultItem } from '~/types'
import { mdnIndex as docs } from '~/data/mdn-index'
import { guideIndex as guides } from '~/data/guides'

import { defaultConfig } from '~/unocss.config'

export const isCompact = useStorage('uno-interact-compact', false)
export const toggleCompact = useToggle(isCompact)

export const uno = createGenerator({}, defaultConfig)
export const searcher = createSearch({ uno, docs, guides })

export const input = ref('')
export const selectIndex = ref(0)
export const isSearching = ref(false)
export const isModalOpen = ref(true)
export const searchResult = shallowRef<ResultItem[]>([])

export const breakpoints = useBreakpoints(breakpointsTailwind)
export const isDesktop = breakpoints.lg
export const isMobile = logicNot(isDesktop)
